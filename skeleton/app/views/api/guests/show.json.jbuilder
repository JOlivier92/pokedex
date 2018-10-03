# json.partial! 'guest', guest: @guest
@gifts = @guest.gifts

json.extract! @guest, :name, :age, :favorite_color
json.gifts do
  @gifts.each do |gift|
    json.extract! gift, :title, :description
  end
end
