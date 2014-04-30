if (!(me && me.id === this.from)) {
  cancel("This is not your message", 401);
}