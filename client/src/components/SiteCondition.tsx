// Import our interface
import { SiteConditionValues as ConditionProps } from './Pages/BuilderPage'

const SiteCondition = (props: ConditionProps) => {
    return (
      <>
        <img src={props.imageURL} />
        <h4>{props.subtitle}</h4>
      </>
    );
}

export { SiteCondition as default}