import { interval, of, Observable, Subscription } from "rxjs";
import { concatMap, mergeMap, exhaustMap, switchMap, tap, take, map, delay } from "rxjs/operators";

export class ObservablesPreview {
  instructionObservable!: Observable<number | string> | Subscription;
  objectACounter: number = 0;
  objectBCounter: number = 0;
  objectAStyle: any = { gridColumn: "1" };
  objectBStyle: any = { gridColumn: "1" };
  btnFluxAState: boolean = false;
  btnFluxBState: boolean = false;

  constructor(
    public observableTitle: string,
    public objectAText: string,
    public objectBText: string,
    public btnFluxAText: string,
    public btnFluxBText: string,
    public fluxInstructionsText: string,
    public observableType: string
  ) { }

  launchObservableMethod(observableType: string): string {
    this.setObservableMapMethod(observableType);
    return observableType;
  }

  translateNameObjectInColor(nameObject: "A" | "B") {
    return nameObject === "A" ? "green" : "blue";
  }

  getObjectObservable$(nameObject: "A" | "B") {
    const isAObject: boolean = nameObject === "A" ? true : false;
    isAObject ? this.objectACounter++ : this.objectBCounter++;
    const objectIndex: number = isAObject ? this.objectACounter : this.objectBCounter;

    console.log(`L'objet %c${nameObject} ${objectIndex} est appelé !`, `text-decoration:underline;color: ${this.translateNameObjectInColor(nameObject)}`);

    isAObject ? this.objectAStyle.gridColumn = `${objectIndex + 1}` : this.objectBStyle.gridColumn = `${objectIndex + 1}`;

    if (isAObject) {
      this.btnFluxAState = true;
      this.btnFluxBState = false;
    } else {
      this.btnFluxAState = false;
      this.btnFluxBState = true;
    }

    return of({
      nameObject,
      objectIndex
    }).pipe(
      delay(isAObject ? 2000 : 3000)
    );
  }

  setObservableMapMethod(observableType: string): void{
    this.instructionObservable = interval(500).pipe(
      take(12),
      map(value => value % 2 ? "A" : "B"),
      tap(
        nameObject => console.log(`L'observable de haut niveau appelle l'objet %c${nameObject}.`, `color:${this.translateNameObjectInColor(nameObject)}`)
      ),
      this.defineObservableMapMethod(observableType, (nameObject: "A" | "B") => this.getObjectObservable$(nameObject))
    ).subscribe();
  }

  defineObservableMapMethod(observableType: string, callback: any) {
    switch (observableType) {
      case "exhaustMapObservable":
        return exhaustMap(callback);
      case "concatMapObservable":
        return concatMap(callback);
      case "switchMapObservable":
        return switchMap(callback);
      case "mergeMapObservable":
      default:
        return mergeMap(callback);
    }
  }
}