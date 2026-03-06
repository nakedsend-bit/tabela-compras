// logger.ts

class Logger {
    private static formatMessage(level: string, message: string): string {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level}]: ${message}`;
    }

    public static debug(message: string): void {
        console.log(this.formatMessage('DEBUG', message));
    }

    public static info(message: string): void {
        console.log(this.formatMessage('INFO', message));
    }

    public static warn(message: string): void {
        console.warn(this.formatMessage('WARN', message));
    }

    public static error(message: string): void {
        console.error(this.formatMessage('ERROR', message));
    }
}

export default Logger;