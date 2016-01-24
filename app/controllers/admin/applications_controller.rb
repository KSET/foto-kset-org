class ApplicationsController < AuthorizedController
  def index
    @applications = application_scope
  end

  def show
    load_application
  end

  def new
    build_application
  end

  def create
    build_application
    save_application || render(:new)
  end

  def edit
    load_application
  end

  def update
    load_application
    build_application
    save_application || render(:edit)
  end

  def destroy
    load_application
    @application.destroy
    redirect_to [:admin, :index]
  end

  private

  def application_params
    return {} unless prams[:application]
    params.require(:application).permit(
      :title, :start_date, :end_date, :type
    )
  end

  def save_application
    return unless @application.save

    redirect_to [:admin, @application]
  end

  def build_application
    @application ||= Application.new
    @application.attributes = application_params
  end

  def load_application
    @application = application_scope.find(params[:id])
  end

  def application_scope
    Application.all
  end
end