use actix_web::{get, App, HttpServer, Responder, HttpResponse};
use actix_cors::Cors;
use serde::Serialize;

#[derive(Serialize)]
struct Called {
    called: bool,
}

#[get("/some")]
async fn index() -> impl Responder {
    let resp = Called { called: true };
    HttpResponse::Ok().json(resp)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        // TODO: remove this after Spring Cloud Gateway has been implemented
        let cors = Cors::default()
            .allowed_origin("http://localhost:4200")
            .allow_any_header()
            .allow_any_method();

        App::new().wrap(cors).service(index)
    })
        .bind(("127.0.0.1", 6060))?
        .run()
        .await
}
