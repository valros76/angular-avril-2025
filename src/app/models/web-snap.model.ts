import { WebSnapI, WebSnapModelI } from "@/interfaces/web-snap.interface";

export class WebSnap implements WebSnapModelI{

  constructor(public websnap: WebSnapI) {
    this.websnap.isLiked = false;
  }

  onLike(): void {
    switch (this.websnap.isLiked) {
      case true:
        this.websnap.likes--;
        break;
      case false:
      default:
        this.websnap.likes++;
        break;
    }

    this.websnap.isLiked = !this.websnap.isLiked;
  }

}