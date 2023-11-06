function Trip(name, startDate, endDate, price, favorited, completed){
    this.name = name ?? '';
    this.startDate = startDate ?? '2024-01-01';
    this.endDate = endDate ?? '2024-12-31';
    this.price = price ?? '';
    this.favorited = favorited ?? true;
    this.completed = completed ?? false;
}