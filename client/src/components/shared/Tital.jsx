import { Helmet } from "react-helmet-async"

const Title = ({title="Chat",description="This is a chat app"}) =>{
  return (
      <Helmet>
          <title>{title}</title>
          <meta name="descriiption" content={description}/>
    </Helmet>
  )
}

export default Title