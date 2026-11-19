import { GameEnv } from "./Config";
import { DefaultServerConfig } from "./DefaultConfig";

export const prodConfig = new (class extends DefaultServerConfig {
  numWorkers(): number {
    // Render's free web service has limited memory and CPU. Keep the game
    // server on a single worker there; larger deployments retain the default.
    return process.env.RENDER_FREE === "true" ? 1 : 20;
  }
  turnIntervalMs(): number {
    // A lower tick rate reduces CPU use on the free instance while keeping
    // the game responsive enough for casual multiplayer.
    return process.env.RENDER_FREE === "true" ? 200 : super.turnIntervalMs();
  }
  env(): GameEnv {
    return GameEnv.Prod;
  }
  jwtAudience(): string {
    return "openfront.io";
  }
})();
