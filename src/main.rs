use warp::Filter;

#[tokio::main]
async fn main() {

    let index = warp::path::end()
        .and(warp::fs::file("payload.json"))
        .and(warp::path::end());

    let routes = warp::get()
        .and(index);

    println!("Warp server listening on port {}", 10113);

    warp::serve(routes)
        .run(([0, 0, 0, 0], 10113))
        .await;
}
