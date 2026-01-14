/**
 * Logging utility for the application
 * Provides different log levels: debug, info, warn, error
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: unknown;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatTimestamp(): string {
    return new Date().toISOString();
  }

  private log(level: LogLevel, message: string, data?: unknown): void {
    const logEntry: LogEntry = {
      level,
      message,
      timestamp: this.formatTimestamp(),
      data,
    };

    if (this.isDevelopment) {
      const style = this.getConsoleStyle(level);
      console.log(
        `%c[${logEntry.timestamp}] [${level.toUpperCase()}] ${message}`,
        style,
        data || ''
      );
    }

    // In production, you might want to send logs to a service
    if (!this.isDevelopment && level === 'error') {
      // TODO: Send error logs to external service
      console.error(logEntry);
    }
  }

  private getConsoleStyle(level: LogLevel): string {
    const styles = {
      debug: 'color: #888; font-weight: normal;',
      info: 'color: #0066cc; font-weight: bold;',
      warn: 'color: #ff9900; font-weight: bold;',
      error: 'color: #cc0000; font-weight: bold;',
    };
    return styles[level];
  }

  debug(message: string, data?: unknown): void {
    this.log('debug', message, data);
  }

  info(message: string, data?: unknown): void {
    this.log('info', message, data);
  }

  warn(message: string, data?: unknown): void {
    this.log('warn', message, data);
  }

  error(message: string, data?: unknown): void {
    this.log('error', message, data);
  }
}

export const logger = new Logger();
