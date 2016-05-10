class TimersController < ApplicationController
  before_action :set_timer, only: [:show, :edit, :update, :destroy]

  # GET /timers
  # GET /timers.json
  def index
    @timers = Timer.all
    if current_user
      @timers = current_user.timers #Timer.all
    else
      @timers = guest_user.timers
    end
  end

  # GET /timers/1
  # GET /timers/1.json
  def show
  end

  # GET /timers/new
  def new
    if current_user
      @timer = current_user.timers.build #Timer.new
    else
      @timer = guest_user.timers.build
    end

    # So esseentially...
    # You need to create a guest_user.... or a master_guest_user...
    # where you're going to be allowing anyone to login from ... without logging in...

    # or...
    # Simply create a new user...
    # and when you're not signed in...
    # do...
    # User.find_by_email("emailofmasterguestaccount").timers.build...

    # Why...
    # Because you want to track all the timers...
    # Right now you have associated timeers with users...
    # what if you have no users...
    # what will you do then..


    # Here....
    # Business logic....
    # we want to track the timers that are created by both
    # logged in and anonymous users
  end

  # GET /timers/1/edit
  def edit
  end

  # POST /timers
  # POST /timers.json
  def create
    if current_user
      @timer = current_user.timers.build(timer_params) #Timer.new(timer_params)
    else
      @timer = guest_user.timers.build(timer_params)
    end

    respond_to do |format|
      if @timer.save
        format.html { redirect_to @timer, notice: 'Timer was successfully created.' }
        format.json { render :show, status: :created, location: @timer }
      else
        format.html { render :new }
        format.json { render json: @timer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /timers/1
  # PATCH/PUT /timers/1.json
  def update
    respond_to do |format|
      if @timer.update(timer_params)
        format.html { redirect_to @timer, notice: 'Timer was successfully updated.' }
        format.json { render :show, status: :ok, location: @timer }
      else
        format.html { render :edit }
        format.json { render json: @timer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /timers/1
  # DELETE /timers/1.json
  def destroy
    @timer.destroy
    respond_to do |format|
      format.html { redirect_to timers_url, notice: 'Timer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_timer
      @timer = Timer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def timer_params
      params.require(:timer).permit(:user2timer_id, :user2timer_type, :name, :timer)
    end
end
