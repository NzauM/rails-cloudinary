class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :hobby, :image_path
end
