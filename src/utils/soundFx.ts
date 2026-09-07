// Web Audio API Procedural Sound Synthesizer for StarCraft Interface

class SoundEngine {
  private ctx: AudioContext | null = null;
  public muted: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, gainVal: number = 0.04) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  public click() {
    this.playTone(850, 'sine', 0.04, 0.03);
  }

  public toggle() {
    this.playTone(600, 'triangle', 0.06, 0.04);
    setTimeout(() => this.playTone(900, 'sine', 0.05, 0.03), 40);
  }

  public success() {
    this.playTone(523.25, 'sine', 0.08, 0.04); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.08, 0.04), 60); // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.12, 0.04), 120); // G5
  }

  public alert() {
    this.playTone(350, 'sawtooth', 0.12, 0.05);
    setTimeout(() => this.playTone(280, 'sawtooth', 0.15, 0.05), 80);
  }

  public roll() {
    this.playTone(400, 'triangle', 0.05, 0.03);
    setTimeout(() => this.playTone(700, 'sine', 0.07, 0.04), 50);
  }
}

export const soundFx = new SoundEngine();
export default soundFx;
