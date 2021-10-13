export class Pokemon {
  public name: string;
  public speed: number | null;
  public weight: number | null;
  public hitPoints: number | null;
  public attack: number | null;
  public specialAttack: number | null;
  public defense: number | null;
  public specialDefense: number | null;
  public id: number | null;
  public sprite: string;
  constructor() {
    this.name = "";
    this.speed = null;
    this.weight = null;
    this.hitPoints = null;
    this.attack = null;
    this.specialAttack = null;
    this.specialDefense = null;
    this.defense = null;
    this.sprite = "";
    this.id = null;
  }
}
