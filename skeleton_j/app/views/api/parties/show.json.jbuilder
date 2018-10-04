@guests = @party.guests
json.extract! @party, :name, :location
json.guests do
  @guests.each do |guest|
    # debugger
    json.set! guest.id do
      @gifts = guest.gifts
      json.extract! guest, :name, :age, :favorite_color
      json.gifts do
        # json.set! @gifts do |gift|
        #   json.extract! gift, :title, :description
        # end ##Almost made it.
      end
    end
  end
end
