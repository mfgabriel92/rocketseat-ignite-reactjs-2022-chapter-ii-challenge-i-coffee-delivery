import * as zod from "zod";

const schema = zod.object({
  zipCode: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().min(1),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1).max(2),
});

export type DeliveryAddressProps = zod.infer<typeof schema>;

export default schema;
