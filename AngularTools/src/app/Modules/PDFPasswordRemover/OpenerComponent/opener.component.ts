import { Component, OnInit } from '@angular/core';
import { PDFPassword } from '../../../Core/Services/PDFService/pdfpassword';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {
  
  selectedFile: File | null = null;
  password: string = '';
  isProcessing = false;
  isPasswordProtected = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  fileName: string = '';

  constructor(private pdfPasswordService: PDFPassword) {}

  ngOnInit(): void {
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileName = this.selectedFile.name;
      this.errorMessage = null;
      this.successMessage = null;
      this.password = '';
      this.isPasswordProtected = false;
      this.checkPasswordProtection();
    }
  }

  async checkPasswordProtection(): Promise<void> {
    if (!this.selectedFile) return;

    try {
      this.isProcessing = true;
      this.isPasswordProtected = await this.pdfPasswordService.isPasswordProtected(this.selectedFile);
    } catch (error) {
      this.errorMessage = 'Failed to check PDF protection status';
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }

  async removePassword(): Promise<void> {
    if (!this.selectedFile || !this.password) {
      this.errorMessage = 'Please select a file and enter a password';
      return;
    }

    try {
      this.isProcessing = true;
      this.errorMessage = null;
      this.successMessage = null;

      const unlockedBlob = await this.pdfPasswordService.removePassword(this.selectedFile, this.password);

      // Create download link
      const url = URL.createObjectURL(unlockedBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = this.getUnlockedFileName();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      this.successMessage = 'Password removed successfully! File downloaded.';
      this.password = '';
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'Failed to remove password';
      }
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }

  private getUnlockedFileName(): string {
    if (!this.fileName) return 'unlocked.pdf';
    const nameWithoutExt = this.fileName.replace(/\.pdf$/i, '');
    return `${nameWithoutExt}_unlocked.pdf`;
  }

  reset(): void {
    this.selectedFile = null;
    this.password = '';
    this.isPasswordProtected = false;
    this.errorMessage = null;
    this.successMessage = null;
    this.fileName = '';
    // Reset file input
    const fileInput = document.getElementById('pdfFileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}
