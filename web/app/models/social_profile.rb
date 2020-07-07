class SocialProfile < ApplicationRecord
  belongs_to :user
  validates_uniqueness_of :uid

  def provider
    Service.find(self.service_id).provider
  end

  def set_values(omniauth)
    return if provider.to_s != omniauth['provider'].to_s || uid != omniauth['uid']
    credentials = omniauth['credentials']
    info = omniauth['info']

    self.access_token = credentials['token']
    self.access_secret = credentials['secret']
    self.credentials = credentials.to_json
    self.email = info['email']
    self.name = info['name']
    self.nickname = info['nickname']
    self.description = info['description'].try(:truncate, 255)
    self.image_url = info['image']
    case provider.to_s
    when 'twitter'
      self.url = info['urls']['Twitter']
      # self.other[:location] = info['location']
      # self.other[:website] = info['urls']['Website']
    end

    # self.set_values_by_raw_info(omniauth['extra']['raw_info'])

    self.save! 
  end

  def set_values_by_raw_info(raw_info)
    case provider.to_s
    when 'twitter'
      # self.other[:followers_count] = raw_info['followers_count']
      # self.other[:friends_count] = raw_info['friends_count']
      # self.other[:statuses_count] = raw_info['statuses_count']
    end

    self.raw_info = raw_info.to_json
    self.save!
  end

end
