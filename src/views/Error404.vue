<template>
    <div className="error-404">
        <div className="container-fluid">
            <div className="error-content">
                <h1 className="error-title display-1 text-danger">Oops!</h1>
                <h4 className="error-sub-title display-4"><span className="text-dark">404</span> - Page not fund</h4>
                <p className="error-desc">The page you are looking might have been removed had its name change or temporarily unavailable.</p>
                <router-link to="/" className="btn btn-sm btn-primary rounded"> &#8592; Back to home page</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error404',
}
</script>

<style scoped lang="scss"></style>
