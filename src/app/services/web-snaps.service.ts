import { Injectable } from "@angular/core";
import { WebSnap } from "@/models/web-snap.model";
import { WebSnapI } from "@/interfaces/web-snap.interface";

@Injectable({
  providedIn: "root"
})
export class WebSnapsService {
  websnaps: WebSnapI[] = [
    {
      id: 1,
      title: "Webdevoo",
      description: "Concepteur de sites internet et boutiques en ligne",
      createdDate: new Date(),
      likes: 0,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
    },
    {
      id: 2,
      title: "Aux Essences Elfiques",
      description: "Artisanat et commerce de produits à base de cire parfumée",
      createdDate: new Date(),
      likes: 42,
      image: "https://images.unsplash.com/photo-1687937479525-8a00d9e285a3?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Webdevoo Formation",
      description: "Organisme de formation dans les domaines du développement web et du e-commerce",
      createdDate: new Date(),
      likes: 21865,
      image: "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  getWebsnapList(): WebSnapI[] {
    return this.websnaps;
  }

  getWebsnapByID(websnapId: number): WebSnapI|undefined{
    const webSnap = this.websnaps.find(webSnap => webSnap.id === websnapId);
    if(!webSnap) return undefined;
    return webSnap;
  }

  onLikeWebsnapByID(websnapId: number): void {
    const webSnap = this.getWebsnapByID(websnapId);

    if (!webSnap) {
      throw new Error("Ce websnap n'existe pas !");
    }

    switch (webSnap.isLiked) {
      case true:
        webSnap.likes--;
        webSnap.isLiked = false;
        break;
      case false:
      default:
        webSnap.likes++;
        webSnap.isLiked = true;
        break;
    }
  }
}