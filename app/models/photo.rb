class Photo < ApplicationRecord
  has_attached_file :image,
         storage: :s3,
         s3_region: ENV["S3_REGION"],
         s3_credentials: {
             bucket: ENV["S3_BUCKET"],
             access_key_id: ENV["AWS_ACCESS_KEY_ID"],
             secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"]
         },
         default_url: "/images/:style/missing_image.jpg"
  validates_attachment :image, content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
end
