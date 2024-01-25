//No se permite hacer private pues aqui deben ir los públicos
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

const driver: Driver = {
  database: "",
  password: "",
  port: 23,
  connect() {

  },
  disconnect() {

  },
  isConnected(name): boolean {
    return true;
  },
}

class PostgresDriver implements Driver{
  constructor (
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}

  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver{
  constructor (
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}
