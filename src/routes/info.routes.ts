import express from "express";

const InfoRouter = express.Router();

const Info = {
  mision:
    "Ser una empresa innovadora y con gran sentido de responsabilidad social que busca el máximo beneficio y satisfacción de nuestros clientes a través de la calidad de nuestros productos y servicios de solución, manteniendo las mejores condiciones para el envió de nuestros productos, asimismo ofrecer la mejor experiencia para nuestros trabajadores generando un ambiente profesional y laboral en el mundo de competencia empresarial.",
  vision:
    "Ser un aliado estratégico para nuestros clientes basado en soluciones y servicios innovadores sobre la base de nuestra responsabilidad, calidad, productividad y compromiso con nuestros usuarios.",
  nosotros:
    "NextSoluciones.pe, es un portal online, especializada en la comercialización de equipos informáticos y relacionados, cuya matriz Next Soluciones Technologies, cuenta con más de 16 años de presencia en el mercado nacional; tenemos la capacidad y experiencia para proveerle de los mejores productos y servicios a través de una atención personalizada, antes y después de su compra, debido a que contamos con los mejores profesionales en nuestro rubro.",
};

InfoRouter.get("/", (req, res) => {
  return res.json(Info);
});

export default InfoRouter;
