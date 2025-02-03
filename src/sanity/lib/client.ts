import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'mcvob9lf',
  dataset:'production',

 token:'sk3YSJuAPMK4ROAdXjAEo7e74eNFoCTE613ldlDP6ErhCSc51bnRS9lAzVODqPDsskWhYwf0a1Q0gB0zXYNz0JR3uGj1EoJBpWLx2QidBMN0tVs0CmkMVvUzzbttKo0ZTBG2ION03MzWnF15ENGfAbJEDSEU7KFZQkOCqXyeF6MyLYbn8yc7',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
