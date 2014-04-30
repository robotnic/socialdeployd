if (!(me && me.id === this.to)) {
  cancel("This is not your message", 401);
}