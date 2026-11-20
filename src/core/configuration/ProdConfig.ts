import { GameEnv } from "./Config";
import { DefaultServerConfig } from "./DefaultConfig";

export const prodConfig = new (class extends DefaultServerConfig {
  numWorkers(): number {
    // Render's free web service has limited memory and CPU. Keep the game
    // server on a single worker there; larger deployments retain the default.
    return process.env.RENDER_FREE === "true" ? 1 : 20;
  }
  turnIntervalMs(): number {
    // Keep Render Free's turn rate responsive while limiting lobby size and
    // bots separately to control the total simulation load.
    return process.env.RENDER_FREE === "true" ? 150 : super.turnIntervalMs();
  }
  env(): GameEnv {
    return GameEnv.Prod;
  }
  jwtAudience(): string {
    return "openfront.io";
  }
})();
