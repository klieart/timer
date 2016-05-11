class StaticController < ApplicationController
  def home
    @title = "Magic"
  end

  def about
    @title = "About Page"
  end
end
