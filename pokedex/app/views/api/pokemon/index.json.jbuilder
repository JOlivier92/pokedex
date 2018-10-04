# item_id = @pokemon.items.map
@pokemon.each do |poke|
  item_ids = []
  poke.items.each do |item|
    item_ids.push(item.id)
  end
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
    json.item_ids item_ids
  end
end
