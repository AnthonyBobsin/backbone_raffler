class Entry < ActiveRecord::Base
  validates :name, presence: :true
end
