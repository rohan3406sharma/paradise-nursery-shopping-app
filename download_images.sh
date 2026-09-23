#!/bin/bash
cd "src/assets/images"

download() {
  curl -A "Mozilla/5.0" -s -L -o "$1" "https://placehold.co/400x400/27ae60/ffffff.jpg?text=$2"
}

download "monstera.jpg" "Monstera"
download "fiddle-leaf-fig.jpg" "Fiddle+Leaf+Fig"
download "zz-plant.jpg" "ZZ+Plant"
download "rose-bush.jpg" "Rose+Bush"
download "lavender.jpg" "Lavender"
download "jasmine.jpg" "Jasmine"
download "aloe-vera.jpg" "Aloe+Vera"
download "jade-plant.jpg" "Jade+Plant"
download "echeveria.jpg" "Echeveria"
download "snake-plant.jpg" "Snake+Plant"
download "spider-plant.jpg" "Spider+Plant"
download "peace-lily.jpg" "Peace+Lily"
curl -A "Mozilla/5.0" -s -L -o "background.jpg" "https://placehold.co/2000x1000/27ae60/ffffff.jpg?text=Paradise+Nursery"

file *.jpg
