export default function hendler(req, res) {

    if(req.method == "GET") {
        hendler(req, res)
    }else {
        res.status(405).send()
    }

    function handlerGet(req,res) {
            res.status(200).jason({
                id:3,
                nome:"Rafa",
                email:"rafarafa@xfcmail.com"
            })
    }
    
}