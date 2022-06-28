import { createLogger, format } from "winston";
import { Console } from "winston/lib/winston/transports";

const logger = createLogger({
  format: format.simple(),
  level: "info",
  transports: [new Console()],
});

export default logger;
export { logger };
