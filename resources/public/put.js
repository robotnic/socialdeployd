if (!(me && me.id === this.from)) {
  cancel("This is not your message", 401);
}
this.createdate = (new Date()).getTime();
