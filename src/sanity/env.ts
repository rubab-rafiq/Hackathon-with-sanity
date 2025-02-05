export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-10'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'sk3YSJuAPMK4ROAdXjAEo7e74eNFoCTE613ldlDP6ErhCSc51bnRS9lAzVODqPDsskWhYwf0a1Q0gB0zXYNz0JR3uGj1EoJBpWLx2QidBMN0tVs0CmkMVvUzzbttKo0ZTBG2ION03MzWnF15ENGfAbJEDSEU7KFZQkOCqXyeF6MyLYbn8yc7',
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
