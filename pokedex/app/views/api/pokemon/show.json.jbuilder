@items = @pokemon.items
debugger;
json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url
  json.set! :item_ids, @items.map {|item| item.id}
end
json.items do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
