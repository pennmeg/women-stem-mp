class Photo < ApplicationRecord
  validates_attachment :image, content_type: {content_type: ["image/jpeg", "image/gif", "image/png"]}
end
