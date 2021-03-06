#![feature(plugin)]
#![plugin(rocket_codegen)]
extern crate rocket;

use rocket::response::NamedFile;
use std::io;
use std::path::{Path, PathBuf};
use std::str;


#[get("/")]
fn index() -> io::Result<NamedFile> {
    NamedFile::open("static/index.html")
}

#[get("/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("static/").join(file)).ok()
}

fn rocket() -> rocket::Rocket {
    rocket::ignite().mount("/", routes![index, files])
}

fn main() {
    rocket().launch();
}
