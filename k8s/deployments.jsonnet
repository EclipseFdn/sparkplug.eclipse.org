local deployment = import "../../releng/hugo-websites/kube-deployment.jsonnet";

deployment.newProductionDeploymentWithStaging(
  "sparkplug.eclipse.org", "sparkplug-staging.eclipse.org"
)