class Customer < ApplicationRecord
    has_one_attached :customer_image

    def image_path
        Cloudinary::Utils.cloudinary_url(self.customer_image.blob.key)
    end
end
