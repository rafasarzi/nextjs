export default function hendler(req, res) {
     const codigo = req.query.codigo
     res.status(200).json({
        id: codigo,
        nome:`teste ${codigo}`,
        email:`rafa${codigo}@xfcmail.com`
     })
}