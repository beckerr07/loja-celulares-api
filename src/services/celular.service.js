class ClientService {
    async getAll() {
        const res = await Pool.query("SELECT*");
        return res.rows;
    }

   async create(dados){
    const res = await Pool.query("INSERT INTO ... RETURNING*", [dados]);
    return res.rows(0);
   }
}