import React from 'react'
import ErrorImage from "../../static/404.png"

import { Layout, SEO } from 'src/components'

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>Not Found</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		<img src={ErrorImage}></img>
		</Layout>
)

export default NotFoundPage
