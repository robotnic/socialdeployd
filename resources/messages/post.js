cancelUnless(me, "You must be logged in to create a todo list", 401);

this.from = me.id;
this.date = (new Date()).getTime();
emit(dpd.users, {id: this.to}, 'newmessage', this); 
