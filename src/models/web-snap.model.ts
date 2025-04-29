export class WebSnap {
  likeBtnClass!: string;
  isLiked!: boolean;

  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public likes: number,
    public image: string
  ) {
    this.likeBtnClass = "like-cta";
    this.isLiked = false;
  }

  onLike(): void {
    switch (this.isLiked) {
      case true:
        this.likes--;
        break;
      case false:
      default:
        this.likes++;
        break;
    }

    this.isLiked = !this.isLiked;
  }

}