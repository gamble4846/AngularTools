import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class PDFPassword {
  private pdfjsLoaded = false;
  private loadingPromise: Promise<void> | null = null;

  /**
   * Lazy load PDF.js from CDN if not already loaded
   */
  private async loadPdfJs(): Promise<void> {
    // If already loaded, return immediately
    if (this.pdfjsLoaded && typeof (window as any).pdfjsLib !== 'undefined') {
      return;
    }

    // If already loading, wait for that promise
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    // Start loading
    this.loadingPromise = new Promise((resolve, reject) => {
      // Check if already loaded
      if (typeof (window as any).pdfjsLib !== 'undefined') {
        this.pdfjsLoaded = true;
        resolve();
        return;
      }

      // Load main PDF.js script
      const script = document.createElement('script');
      script.src = 'assets/JSScripts/pdf.min.js';
      script.onload = () => {
        // Configure worker after main script loads
        if (typeof (window as any).pdfjsLib !== 'undefined') {
          (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/JSScripts/pdf.worker.min.js';
          this.pdfjsLoaded = true;
          resolve();
        } else {
          this.loadingPromise = null;
          reject(new Error('PDF.js library not available after loading'));
        }
      };
      script.onerror = () => {
        this.loadingPromise = null;
        reject(new Error('Failed to load PDF.js library'));
      };
      document.head.appendChild(script);
    });

    return this.loadingPromise;
  }
  /**
   * Simple reusable function to remove password from PDF
   * @param pdfBlob - The encrypted PDF file as a Blob or File
   * @param password - The password to unlock the PDF
   * @returns A Promise that resolves to a Blob containing the unlocked PDF
   */
  async removePassword(pdfBlob: Blob | File, password: string): Promise<Blob> {
    try {
      // Load PDF.js if not already loaded
      await this.loadPdfJs();

      const arrayBuffer = await pdfBlob.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      // Load PDF with password using PDF.js
      const pdf = await (window as any).pdfjsLib.getDocument({ data: uint8Array, password }).promise;

      // Create new PDF without password
      const newPdf = await PDFDocument.create();

      // Process each page
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });

        // Render to canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: ctx, viewport }).promise;

        // Convert to image and add to new PDF
        const dataUrl = canvas.toDataURL('image/png');
        const pngImage = await newPdf.embedPng(dataUrl);
        const { width, height } = pngImage.size();
        const pdfPage = newPdf.addPage([width, height]);
        pdfPage.drawImage(pngImage, { x: 0, y: 0, width, height });
      }

      // Return unlocked PDF
      const pdfBytes = await newPdf.save();
      return new Blob([pdfBytes as any], { type: 'application/pdf' });
    } catch (error: any) {
      const msg = error?.message?.toLowerCase() || '';
      if (msg.includes('password') || msg.includes('incorrect')) {
        throw new Error('Incorrect password');
      }
      throw new Error(`Failed: ${error?.message || 'Unknown error'}`);
    }
  }

  /**
   * Check if PDF is password protected
   * @param pdfBlob - The PDF file as a Blob or File
   * @returns true if password protected, false otherwise
   */
  async isPasswordProtected(pdfBlob: Blob | File): Promise<boolean> {
    try {
      // Load PDF.js if not already loaded
      await this.loadPdfJs();

      const arrayBuffer = await pdfBlob.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      
      // Try loading without password
      await (window as any).pdfjsLib.getDocument({ data: uint8Array }).promise;
      return false;
    } catch (error: any) {
      const msg = error?.message?.toLowerCase() || '';
      return msg.includes('password') || msg.includes('encrypted');
    }
  }
}
