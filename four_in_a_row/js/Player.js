class Player {
   constructor(name, color, token, isTurn = false) {
      this.name = name;
      this.id = id;
      this.color = color;
      this.isTurn = isTurn;
      this.tokens = this.createTokens(21);
   }

   createTokens(number) {
      const tokens = [];

      for (let i = 0; i < number; i++) {
         let token = new Token(i, this);
         tokens.push(token);
      }

      return tokens;
   }
}