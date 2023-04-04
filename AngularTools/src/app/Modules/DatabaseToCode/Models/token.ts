export interface TokenModel {
    servers: Server[];
}

export interface Server {
    databaseType: string;
    connectionString: string;
    isSelected: boolean;
}