cancelUnless(me, "You must be logged in to create a todo list", 401);

this.from = me.id;
this.createdate = (new Date()).getTime();