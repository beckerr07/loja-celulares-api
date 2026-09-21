clienteRouter.get("/", async (req, res) =>{
    const Clientes = await ClientService.getAll();
    return res.json(clientes);
});

clienteRouter.post("/" , async (req , res) =>{
    const cliente = await ClientService.create(req.body);
    return res.status(201).json(cliente);
});