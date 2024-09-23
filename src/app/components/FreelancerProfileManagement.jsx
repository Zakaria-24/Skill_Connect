"use client";

import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function FreelancerProfileManagement() {
  const categorys = [
    { key: "web developer", label: "Web Developer" },
    { key: "frontend developer", label: "Frontend Developer" },
    { key: "backend developer", label: "Backend Developer" },
    { key: "wordpress developer ", label: "WordPress Developer " },
    { key: "php developer", label: "PHP Developer" },
    { key: "laravel developer", label: "Laravel developer" },
    { key: "ui designer", label: "UI designer" },
    { key: "graphics designer", label: "Graphics Designer" },
  ];
  const availability = [
    { key: "Availab", label: "Availab" },
    { key: "Not Availab", label: "Not Availab" },
  ];
  const experience = [
    { key: "Fresher", label: "Fresher" },
    { key: "1y", label: "1y" },
    { key: "2y", label: "2y" },
    { key: "3y", label: "3y" },
    { key: "4y", label: "4y" },
    { key: "5y", label: "5y" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className="text-4xl font-bold bg-gradient-to-l from-[#90EE90] to-[#2E8B57] bg-clip-text text-transparent text-center my-5">
        Freelancer Profile Management
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center justify-center flex-col"
      >
        <div className="lg:w-4/5 md:w-4/5 w-3/4  flex items-center justify-center lg:flex-row md:flex-col flex-col  gap-5 ">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <Input
              key="name"
              type="text"
              color="primary"
              label="Name"
              placeholder="Name"
              defaultValue="John Doe"
              className="max-w-[500px]"
              {...register("name")}
            />
            {errors.name && <span>Name is required</span>}
            <Textarea
              label="Description"
              color="primary"
              placeholder="Enter your description"
              className="max-w-[500px]"
            />

            <Input
              key="title"
              type="text"
              color="primary"
              label="Title"
              placeholder=" Title"
              defaultValue="Frontend Developer"
              className="max-w-[500px]"
              {...register("title")}
            />
            {errors.title && <span>Title is required</span>}
            <Input
              key="Location"
              type="text"
              color="primary"
              label="Location"
              placeholder="Location"
              defaultValue="xyz"
              className="max-w-[500px]"
              {...register("location")}
            />
            {errors.location && <span>Location is required</span>}
            <Input
              key="Pricing"
              type="text"
              color="primary"
              label="Pricing"
              placeholder="Pricing"
              defaultValue="$20"
              className="max-w-[500px]"
              {...register("pricing")}
            />
            {errors.pricing && <span>Location is required</span>}
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <Input
              key="Portfolio"
              type="url"
              color="primary"
              label="Portfolio"
              placeholder="Portfolio"
              defaultValue="https://portfolio.com"
              className="max-w-[500px]"
              {...register("portfolio")}
            />
            {errors.portfolio && <span>Portfolio is required</span>}
            <Input
              key="Past Work"
              type="url"
              color="primary"
              label="Past Work"
              placeholder="Past Work"
              defaultValue="https://example.com"
              className="max-w-[500px]"
              {...register("pastwork")}
            />
            {errors.pastwork && <span>Post Work is required</span>}

            <Select
              label="Required Skills"
              color="primary"
              placeholder="Select an Skill"
              selectionMode="multiple"
              className="max-w-[500px]"
            >
              {categorys.map((category) => (
                <SelectItem key={category.key}>{category.label}</SelectItem>
              ))}
            </Select>
            <Select
              label="Availability"
              color="primary"
              placeholder="Availability"
              defaultSelectedKeys={["Availab"]}
              className="max-w-[500px]"
              scrollShadowProps={{
                isEnabled: false,
              }}
            >
              {availability.map((budget) => (
                <SelectItem key={budget.key}>{budget.label}</SelectItem>
              ))}
            </Select>
            <Select
              label="Experience"
              color="primary"
              placeholder="Experience"
              defaultSelectedKeys={["1y"]}
              className="max-w-[500px]"
              scrollShadowProps={{
                isEnabled: false,
              }}
            >
              {experience.map((budget) => (
                <SelectItem key={budget.key}>{budget.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
        {/* <input type="submit" />
         */}
        <button
          type="submit"
          className="btn py-4 px-5 bg-[#2e8b57] text-white hover:text-black rounded-md my-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
