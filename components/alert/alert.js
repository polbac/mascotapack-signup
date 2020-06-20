function Alert({ children }) {

    return (
        <div class="alert alert-danger" role="alert">
            <i class="ni ni-fat-remove"></i>{children}
        </div>
    )
}

export default Alert